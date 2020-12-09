import { EISDIR } from 'constants';
import * as fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export class FileUtil {
	public static async isDir(filePath: string): Promise<boolean> {
		try {
			await readFile(filePath)
			return false;
		} catch (e) {
			if (e.code === EISDIR) {
				return true;
			}
			return e
		}
	}
}