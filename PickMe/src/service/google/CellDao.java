package service.google;

public class CellDao {
	private int SUCCEED = 1;
	private int FAILED = -1;
	
	private static final Integer CELL_DB = 0;

	public static String setURL(String DATABASE) {
		
		String URL = "https://spreadsheets.google.com/feeds/list/" + DATABASE + "/" + (CELL_DB + 1)
		+ "/public/basic?alt=json";
		return URL;
	}
	
	
//	public static void main(String[] args) throws IOException, ParseException {
//		MemberDao dao = new MemberDao();
//
//		HashMap<String, Object> params = new HashMap<>();
//		params.put(Member.EMAIL_str, "bye");
//		params.put(Member.PASSWORD_str, "new password");
//		params.put(Member.KEYWORD_str, "new keyword");
//		params.put(Member.PHONE_str, "new phone");
//
//		System.out.println(params.toString());
//
//		System.out.println(dao.insertMember(params));
//		// System.out.println(dao.updateMember(params));
//		// System.out.println(dao.getRowIndex("hello"));
//		System.out.println(dao.selectOneMember("bye").toString());
//	}
	
}
