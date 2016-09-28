package service.member;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Member;
import restcontroller.Password;
import service.google.ClientDB;
import service.google.MemberDao;

@Service
public class MemberService {
	private final int SUCCEED = 1;
	private final int FAILED = -1;

	@Autowired
	private MemberDao memberDao;
	
	@Autowired
	private ClientDB cellDB;

	public Map<String, Object> login(Map<String, Object> param) throws Exception {
		for (int index = Member.EMAIL; index < Member.PASSWORD + 1; index++) {
			if (!param.containsKey(Member.STR[index])||param.get(Member.STR[index])==null||((String)param.get(Member.STR[index])).isEmpty())
				throw new Exception(FAILED * (610 + index + 4) + "");
		}

		HashMap<String, Object> orgdata = memberDao.selectOneMember((String) param.get(Member.EMAIL_str));
		if (orgdata == null)
			throw new Exception(FAILED * 601 + "");
		String password = (String) Password.password((String) param.get(Member.PASSWORD_str), (String) orgdata.get(Member.SALT)).get(Member.PASSWORD_str);

		if (!password.equals(orgdata.get(Member.PASSWORD)))
			throw new Exception(FAILED * 603 + "");
		
		orgdata.put("code", 200);
		
		return orgdata;
	}

	public int join(Map<String, Object> param) throws Exception {
		for (int index = 0; index < Member.NAME + 1; index++) {
			if (!(param.containsKey(Member.STR[index]) || index == Member.SALT)&&(param.get(Member.STR[index])==null||((String)param.get(Member.STR[index])).isEmpty()))
				throw new Exception(FAILED * (610 + index + 4) + "");
		}

		HashMap<String, Object> orgdata = memberDao.selectOneMember((String) param.get(Member.EMAIL_str));
		if (orgdata != null)
			throw new Exception(FAILED * 602 + "");
		Map<String, Object> password = Password.password((String) param.get(Member.PASSWORD_str));
		param.put(Member.PASSWORD_str, password.get(Member.PASSWORD_str));
		param.put(Member.SALT_str, password.get(Member.SALT_str));
		param.put(Member.STATE_str, "TRUE");
		
		Map<String, Object> result = cellDB.setClientDB();
		param.put(Member.BASE_FOLDER_str, result.get(Member.BASE_FOLDER_str));
		param.put(Member.CELL_DB_str, result.get(Member.CELL_DB_str));
		param.put(Member.RESUME_DB_str, result.get(Member.RESUME_DB_str));
		
		memberDao.insertMember(param);
		return SUCCEED * 200;
	}
	
	
}