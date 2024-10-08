export  default function getStudentsByLocation(arg1, arg2) {
	return arg1.filter((student) => student.location === arg2);
}
