const input = [
	1,
	12,
	2,
	3,
	1,
	1,
	2,
	3,
	1,
	3,
	4,
	3,
	1,
	5,
	0,
	3,
	2,
	13,
	1,
	19,
	1,
	19,
	6,
	23,
	1,
	23,
	6,
	27,
	1,
	13,
	27,
	31,
	2,
	13,
	31,
	35,
	1,
	5,
	35,
	39,
	2,
	39,
	13,
	43,
	1,
	10,
	43,
	47,
	2,
	13,
	47,
	51,
	1,
	6,
	51,
	55,
	2,
	55,
	13,
	59,
	1,
	59,
	10,
	63,
	1,
	63,
	10,
	67,
	2,
	10,
	67,
	71,
	1,
	6,
	71,
	75,
	1,
	10,
	75,
	79,
	1,
	79,
	9,
	83,
	2,
	83,
	6,
	87,
	2,
	87,
	9,
	91,
	1,
	5,
	91,
	95,
	1,
	6,
	95,
	99,
	1,
	99,
	9,
	103,
	2,
	10,
	103,
	107,
	1,
	107,
	6,
	111,
	2,
	9,
	111,
	115,
	1,
	5,
	115,
	119,
	1,
	10,
	119,
	123,
	1,
	2,
	123,
	127,
	1,
	127,
	6,
	0,
	99,
	2,
	14,
	0,
	0,
];

const nouns = [...Array(100).keys()];
const verbs = [...Array(100).keys()];

const runProgram = (program, position = 0) => {
	const nextProgram = program.slice();
	const [opcode, opPos0, opPos1, outputPos] = program.slice(position, position + 4);

	if (opcode === 99) {
		return program[0];
	} else if (opcode === 2) {
		nextProgram[outputPos] = program[opPos0] * program[opPos1];
	} else if (opcode === 1) {
		nextProgram[outputPos] = program[opPos0] + program[opPos1];
	} else {
		throw new Error(`Ya blew it: ${{ opcode, position }}`);
	}

	return runProgram(nextProgram, position + 4);
};

for (const noun of nouns) {
	const program = input.slice();
	program[1] = noun;

	for (const verb of verbs) {
		program[2] = verb;

		if (runProgram(program) === 19690720) {
			console.log({ noun, verb });
			console.log({ final: 100 * noun + verb });
			break;
		}
	}
}
