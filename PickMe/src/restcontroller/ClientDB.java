package restcontroller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.CellData;
import com.google.api.services.sheets.v4.model.ExtendedValue;
import com.google.api.services.sheets.v4.model.GridCoordinate;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.RowData;
import com.google.api.services.sheets.v4.model.SheetProperties;
import com.google.api.services.sheets.v4.model.UpdateCellsRequest;
import com.google.api.services.sheets.v4.model.UpdateSheetPropertiesRequest;

import model.Cell;
import model.Member;
import model.Resume;
import service.google.GoogleAuthorize;

@Controller
public class ClientDB {
	private Drive driveService;
	private Sheets sheetsService;
	private String baseFolder;
	private String cellDB;
	private int SUCCEED = 1;
	private int FAILED = -1;
	private String resumeDB;

	private String createBaseFolder() throws IOException {
		String pageToken = null;

		do {
			FileList result = driveService.files().list()
					.setQ("mimeType='application/vnd.google-apps.folder' and name='.PickMe' and trashed=false")
					.setSpaces("drive").setFields("nextPageToken, files(id, name)").setPageToken(pageToken).execute();
			if (result.getFiles() != null && !result.getFiles().isEmpty()) {
				return result.getFiles().get(0).getId();
			}
			pageToken = result.getNextPageToken();
		} while (pageToken != null);
		File folderMetadata = new File();
		folderMetadata.setName(".PickMe");
		folderMetadata.setMimeType("application/vnd.google-apps.folder");

		File folder = driveService.files().create(folderMetadata).setFields("id").execute();

		return folder.getId();
	}

	private String createCellDB() throws IOException {
		String pageToken = null;

		do {
			FileList result = driveService.files().list()
					.setQ("mimeType='application/vnd.google-apps.spreadsheet' and name='Cell' and trashed=false")
					.setSpaces("drive").setFields("nextPageToken, files(id, name)").setPageToken(pageToken).execute();
			if (result.getFiles() != null && !result.getFiles().isEmpty()) {
				return result.getFiles().get(0).getId();
			}
			pageToken = result.getNextPageToken();
		} while (pageToken != null);

		File fileMetadata = new File();
		fileMetadata.setName("Cell");
		fileMetadata.setParents(Collections.singletonList(baseFolder));
		fileMetadata.setMimeType("application/vnd.google-apps.spreadsheet");

		File file = driveService.files().create(fileMetadata).setFields("id, parents").execute();

		return file.getId();
	}

	private String createResumeDB() throws IOException {
		String pageToken = null;

		do {
			FileList result = driveService.files().list()
					.setQ("mimeType='application/vnd.google-apps.spreadsheet' and name='Resume' and trashed=false")
					.setSpaces("drive").setFields("nextPageToken, files(id, name)").setPageToken(pageToken).execute();
			if (result.getFiles() != null && !result.getFiles().isEmpty()) {
				return result.getFiles().get(0).getId();
			}
			pageToken = result.getNextPageToken();
		} while (pageToken != null);

		File fileMetadata = new File();
		fileMetadata.setName("Resume");
		fileMetadata.setParents(Collections.singletonList(baseFolder));
		fileMetadata.setMimeType("application/vnd.google-apps.spreadsheet");

		File file = driveService.files().create(fileMetadata).setFields("id, parents").execute();

		return file.getId();
	}
	
	public void setCellDB() throws Exception{
		List<Request> requests = new ArrayList<>();

		requests.add(new Request().setUpdateSheetProperties(new UpdateSheetPropertiesRequest()
				.setProperties(new SheetProperties().setSheetId(0).setTitle("CellDB")).setFields("title")));

		List<CellData> values = new ArrayList<>();
		for (String columnName : Cell.STR)
			values.add(new CellData().setUserEnteredValue(new ExtendedValue().setStringValue(columnName)));

		requests.add(new Request().setUpdateCells(new UpdateCellsRequest()
				.setStart(new GridCoordinate().setSheetId(0).setRowIndex(0).setColumnIndex(0))
				.setRows(Arrays.asList(new RowData().setValues(values))).setFields("*")));

		BatchUpdateSpreadsheetRequest batchUpdateRequest = new BatchUpdateSpreadsheetRequest()
				.setRequests(requests);
		
		try {
			sheetsService.spreadsheets().batchUpdate(cellDB, batchUpdateRequest).execute();
		} catch (IOException e) {
			throw new Exception(FAILED * 620 + "");
		}
	}
	
	public void setResumeDB() throws Exception{
		List<Request> requests = new ArrayList<>();

		requests.add(new Request().setUpdateSheetProperties(new UpdateSheetPropertiesRequest()
				.setProperties(new SheetProperties().setSheetId(0).setTitle("ResumeDB")).setFields("title")));

		List<CellData> values = new ArrayList<>();
		for (String columnName : Resume.STR)
			values.add(new CellData().setUserEnteredValue(new ExtendedValue().setStringValue(columnName)));

		requests.add(new Request().setUpdateCells(new UpdateCellsRequest()
				.setStart(new GridCoordinate().setSheetId(0).setRowIndex(0).setColumnIndex(0))
				.setRows(Arrays.asList(new RowData().setValues(values))).setFields("*")));

		BatchUpdateSpreadsheetRequest batchUpdateRequest = new BatchUpdateSpreadsheetRequest()
				.setRequests(requests);
		
		try {
			sheetsService.spreadsheets().batchUpdate(resumeDB, batchUpdateRequest).execute();
		} catch (IOException e) {
			throw new Exception(FAILED * 630 + "");
		}
	}
	
	@RequestMapping("setClientDB/")
	public @ResponseBody Map<String, Object> setClientDB() throws Exception {
		try {
			driveService = GoogleAuthorize.getDriveService();
			sheetsService = GoogleAuthorize.getSheetsService();
			baseFolder = createBaseFolder();
			cellDB = createCellDB();
			resumeDB = createResumeDB();

			this.setCellDB();
			this.setResumeDB();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw new Exception(FAILED * 620 + "");
		}
		Map<String, Object> result = new HashMap<>();
		
		result.put("code", SUCCEED * 200);
		result.put(Member.CELL_DB_str, cellDB);
		result.put(Member.RESUME_DB_str, cellDB);
		result.put(Member.BASE_FOLDER_str, baseFolder);
		
		return result;
	}

	public String getFileId() {
		return cellDB;
	}

	public void setFileId(String fileId) {
		this.cellDB = fileId;
	}
	// public static void main(String[] args) throws IOException {
	// ClientCellDB dao = new ClientCellDB();
	// System.out.println(dao.fileId);
	// System.out.println(dao.folderId);
	// System.out.println();
	// dao.startCell();
	// }
}
