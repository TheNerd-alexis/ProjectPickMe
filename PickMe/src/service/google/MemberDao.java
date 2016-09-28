package service.google;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.AppendCellsRequest;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.CellData;
import com.google.api.services.sheets.v4.model.ExtendedValue;
import com.google.api.services.sheets.v4.model.GridCoordinate;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.RowData;
import com.google.api.services.sheets.v4.model.UpdateCellsRequest;

import model.Member;

@Component
public class MemberDao {
	private final int SUCCEED = 1;
	private final int FAILED = -1;

	// google sheets database src
	// https://docs.google.com/spreadsheets/d/1rHBsQ9T1GQxdzwoRdJPaIQZRJxgUnB1GGZgAn2J4Ttc/edit?usp=sharing

	// result url
	// https://spreadsheets.google.com/feeds/list/1rHBsQ9T1GQxdzwoRdJPaIQZRJxgUnB1GGZgAn2J4Ttc/1/public/basic

	private static final String DATABASE = "1rHBsQ9T1GQxdzwoRdJPaIQZRJxgUnB1GGZgAn2J4Ttc";
	private static final Integer MEMBER_DB = 0;
	private static final String URL = "https://spreadsheets.google.com/feeds/list/" + DATABASE + "/" + (MEMBER_DB + 1)
			+ "/public/basic?alt=json";

	public HashMap<String, Object> selectOneMember(String input) throws IOException, ParseException {
		URL url = new URL(URL + "&sq=member-email=" + URLEncoder.encode(input, "UTF-8"));
		 System.out.println(url.toString());
		JSONObject obj = (JSONObject) new JSONParser()
				.parse(new BufferedReader(new InputStreamReader(url.openStream())));

		// Iterator<String> key = obj.keySet().iterator();
		// while(key.hasNext())
		// System.out.println(key.next());

		JSONArray array = (JSONArray) ((JSONObject) obj.get("feed")).get("entry");
		if (array == null || array.size() < 1)
			return null;

		JSONObject entry = (JSONObject) array.get(0);
		String email = (String) ((JSONObject) entry.get("title")).get("$t");
		String content = (String) ((JSONObject) entry.get("content")).get("$t");
		HashMap<String, Object> member = new HashMap<>();
		member.put(Member.EMAIL_str, email);

		StringTokenizer token = new StringTokenizer(content, ",: ");

		while (token.hasMoreTokens()) {
			// System.out.println(member.toString());
			String key = token.nextToken();
			String value = token.nextToken();
			member.put(key, value);
		}
		return member;
	}

	public int getRowIndex(String input) throws IOException, ParseException {
		URL url = new URL(URL);
		JSONObject obj = (JSONObject) new JSONParser()
				.parse(new BufferedReader(new InputStreamReader(url.openStream())));

		JSONArray array = (JSONArray) ((JSONObject) obj.get("feed")).get("entry");

		for (int index = 0; index < array.size(); index++) {
			String email = (String) ((JSONObject) ((JSONObject) array.get(index)).get("title")).get("$t");
			if (email.equals(input))
				return index + 1;
		}
		return FAILED;
	}

	public int insertMember(Map<String, Object> param) throws IOException, ParseException {
		for (int index = 0; index < Member.STR.length; index++) {
			if (!param.containsKey(Member.STR[index]))
				param.put(Member.STR[index], "");
		}

		List<CellData> values = new ArrayList<>();
		for (int index = 0; index < Member.STR.length; index++) {
			String value = URLEncoder.encode((String) param.get(Member.STR[index]), "UTF-8");
			values.add(index, new CellData().setUserEnteredValue(new ExtendedValue().setStringValue(value)));
			// System.out.println(index + " " + value);
		}

		Request request = new Request().setAppendCells(new AppendCellsRequest()
				.setRows(Arrays.asList(new RowData().setValues(values))).setSheetId(MEMBER_DB).setFields("*"));

		return batchUpdate(request);
	}

	public int updateMember(Map<String, Object> param) throws IOException, ParseException {
		HashMap<String, Object> orgdata = this.selectOneMember((String) param.get(Member.EMAIL_str));
		if (orgdata == null || orgdata.isEmpty())
			return FAILED;

		int rowIndex = this.getRowIndex(((String) param.get(Member.EMAIL_str)));

		for (int index = 0; index < Member.STR.length; index++) {
			if (!param.containsKey(index))
				param.put(Member.STR[index], orgdata.get(Member.STR[index]));
		}

		List<CellData> values = new ArrayList<>();
		for (int index = 1; index < Member.STR.length; index++) {
			String value = URLEncoder.encode((String) param.get(Member.STR[index]), "UTF-8");
			values.add(index - 1, new CellData().setUserEnteredValue(new ExtendedValue().setStringValue(value)));
		}

		Request request = new Request()
				.setUpdateCells(
						new UpdateCellsRequest()
								.setStart(new GridCoordinate().setSheetId(MEMBER_DB).setRowIndex(rowIndex)
										.setColumnIndex(1))
								.setRows(Arrays.asList(new RowData().setValues(values))).setFields("*"));

		return batchUpdate(request);
	}

	public int batchUpdate(Request request) throws IOException {
		Sheets service = GoogleAuthorize.getSheetsService();

		List<Request> requests = new ArrayList<>();
		requests.add(request);
		BatchUpdateSpreadsheetRequest batchUpdateRequest = new BatchUpdateSpreadsheetRequest().setRequests(requests);
		try {
			service.spreadsheets().batchUpdate(DATABASE, batchUpdateRequest).execute();
			return SUCCEED;
		} catch (IOException e) {
			return FAILED;
		}
	}

	public static void main(String[] args) throws IOException, ParseException {
		MemberDao dao = new MemberDao();

		HashMap<String, Object> params = new HashMap<>();
		params.put(Member.EMAIL_str, "bye");
		params.put(Member.PASSWORD_str, "new password");
		params.put(Member.KEYWORD_str, "new keyword");
		params.put(Member.PHONE_str, "new phone");

		System.out.println(params.toString());

		System.out.println(dao.insertMember(params));
		// System.out.println(dao.updateMember(params));
		// System.out.println(dao.getRowIndex("hello"));
		System.out.println(dao.selectOneMember("bye").toString());
	}
}