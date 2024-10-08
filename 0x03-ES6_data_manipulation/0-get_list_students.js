/**
 * Retrieves a list of students.
 * @author Amr Sal <https://github.com/Amr995>
 * @returns array of objects
 */
export default function getListStudents() => {
	return [
		{
			id: 1,
			firstName: 'Guillaume',
			location: 'San Francisco'
		},
		{
			id: 2,
			firstName: 'James',
			location: 'Columbia'
		},
		{
			id: 5,
			firstName: 'Serena',
			location: 'San Francisco'
		}
	];
}
