import Student from '@/screens/Student/Student'
import { NextPageAuth } from '@/types/auth.types'

const StudentPage: NextPageAuth = () => {
	return <Student />
}

StudentPage.isOnlyAdmin = true
export default StudentPage
