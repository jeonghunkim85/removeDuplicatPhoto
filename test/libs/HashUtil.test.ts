import { suite, test } from "@testdeck/jest"
import { HashUtil } from "../../src/libs"

@suite
export class HashUtilTest {

	@test
	async test() {
		const hash = await HashUtil.getFileHash("../resources/1.txt")
		expect(hash.length).toBeGreaterThan(0)
		console.log(hash)
	}
}
