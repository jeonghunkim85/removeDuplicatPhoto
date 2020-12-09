import * as fs from 'fs';
import { promisify } from 'util';
import { HashUtil, FileUtil } from './libs';

const targetDirPath = process.argv[2]
if (!targetDirPath) {
	process.stdout.write("usage: dir \n");
	process.exit(0)
}

const readDir = promisify(fs.readdir);

class Runtime {

	private hashSet = new Set<string>();

	async run(): Promise<void> {

		const dir = await readDir(targetDirPath);

		dir.forEach(async f => {
			if (await FileUtil.isDir(f)) {
				console.log(`${f} is a directory`);
			} else {
				const fs = await HashUtil.getFileHash(f);
				console.log(`${f} is a file. hash:`, fs);
			}
		})
	}
}

new Runtime().run()