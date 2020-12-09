import * as fs from 'fs';
import crypto from 'crypto';

export class HashUtil {
	private static readonly ALGORYTHM = "sha256"

	public static async getFileHash(filePath: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			const rs = fs.createReadStream(filePath);
			const hash = crypto.createHash(HashUtil.ALGORYTHM);
			rs.on('data', chunk => hash.update(chunk));
			rs.on('end', () => resolve(hash.digest('hex')));
			rs.on('error', err => reject(err));
		});
	}
}
