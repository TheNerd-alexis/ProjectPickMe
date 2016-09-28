package restcontroller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import model.Member;

@Controller
public class Password {
	
	/**
	 * 비밀번호 암호화 메소드
	 * 
	 * @param str
	 * @return [암호화된 비밀번호, salt]
	 */
	@RequestMapping("setPassword/{password}")
	public static @ResponseBody Map<String, Object> password(@PathVariable("password") String pw) {
		String salt = null;
		String SHA = "";
		try {
			MessageDigest sh = MessageDigest.getInstance("SHA-256");
			salt = byteArrayToHex(SecureRandom.getInstanceStrong().generateSeed(16));
			pw = salt + pw;
			sh.update(pw.getBytes());
			byte byteData[] = sh.digest();
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
			}
			SHA = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			SHA = null;
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put(Member.PASSWORD_str, SHA);
		result.put(Member.SALT_str, salt);

		return result;
	}

	/**
	 * 암호화된 비밀번호 확인 메소드
	 * 
	 * @param pw
	 *            비밀먼호
	 * @param salt
	 *            암호화시 사용된 salt
	 * @return 암호화된 비밀번호
	 */
	@RequestMapping("getPassword/{password}/{salt}")
	public static @ResponseBody Map<String, Object> password(@PathVariable("password") String pw, @PathVariable("salt") String salt) {
		String SHA = "";
		try {
			MessageDigest sh = MessageDigest.getInstance("SHA-256");
			pw = salt + pw;
			sh.update(pw.getBytes());
			byte byteData[] = sh.digest();
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
			}
			SHA = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			SHA = null;
		}
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put(Member.PASSWORD_str, SHA);
		return result;
	}

	public static byte[] hexToByteArray(String hex) {
		if (hex == null || hex.length() == 0) {
			return null;
		}

		byte[] ba = new byte[hex.length() / 2];
		for (int i = 0; i < ba.length; i++) {
			ba[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
		}
		return ba;
	}

	public static String byteArrayToHex(byte[] ba) {
		if (ba == null || ba.length == 0) {
			return null;
		}

		StringBuffer sb = new StringBuffer(ba.length * 2);
		String hexNumber;
		for (int x = 0; x < ba.length; x++) {
			hexNumber = "0" + Integer.toHexString(0xff & ba[x]);

			sb.append(hexNumber.substring(hexNumber.length() - 2));
		}
		return sb.toString();
	}
}
