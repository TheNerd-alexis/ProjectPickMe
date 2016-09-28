package model;

public interface Member {
	public final int EMAIL = 0;
	public final int PASSWORD = 1;
	public final int SALT = 2;
	public final int KEYWORD = 3;
	public final int PHONE = 4;
	public final int NAME = 5;
	public final int STATE = 6;
	public final int BASE_FOLDER = 7;
	public final int CELL_DB = 8;
	public final int RESUME_DB = 9;

	public final String[] STR = { "memberEmail", "memberPwd", "memberSalt", "memberKeyword", "memberPhone",
			"memberName", "memberState", "memberFolder", "memberCellDB", "memberResumeDB" };

	public final String EMAIL_str = STR[EMAIL];
	public final String PASSWORD_str = STR[PASSWORD];
	public final String SALT_str = STR[SALT];
	public final String KEYWORD_str = STR[KEYWORD];
	public final String PHONE_str = STR[PHONE];
	public final String NAME_str = STR[NAME];
	public final String STATE_str = STR[STATE];
	public final String BASE_FOLDER_str = STR[BASE_FOLDER];
	public final String CELL_DB_str = STR[CELL_DB];
	public final String RESUME_DB_str = STR[RESUME_DB];

	public static int toInt(String str) {
		for (int i = 0; i < STR.length; i++)
			if (str.equals(STR[i]))
				return i;
		return -1;
	}

	public static String toStr(int index) {
		if (index > 0 && index < STR.length)
			return STR[index];
		return null;
	}
}