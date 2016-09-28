package model;

public interface Cell {
	public final int EMAIL = 0;
	public final int TIME = 1;
	public final int NAME = 2;
	// public final int INDEX = 3;
	public final int CONTENT = 3;
	public final int TYPE = 4;
	public final int VISIBILITY = 5;

	public final String[] STR = { "cellEmail", "cellWriteTime", "cellName",
			/* "cell-content-index", */ "cellContent", "cellType", "cellVisibility"};

	public final String EMAIL_str = STR[EMAIL];
	public final String TIME_str = STR[TIME];
	public final String NAME_str = STR[NAME];
	// public final String INDEX_str = STR[INDEX];
	public final String CONTENT_str = STR[CONTENT];
	public final String TYPE_str = STR[TYPE];
	public final String VISIBILITY_str = STR[VISIBILITY];
}