import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useGenerateBreadcrumbs } from '@/hooks/useGenerateBreadcrumbs'

import UserLayout from '@/components/Layout/UserLayout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react'
import { useGetStudentResult } from '@/hooks/adminHooks/useGetStudentResult'
import ValueOrientationTableResult from '@/components/ValueOrientationsQuiz/ValueOrientationTableResult'
import { useAppSelector } from '@/hooks/useAppSelector'

const Student: FC = () => {
	const router = useRouter()
	const { result } = useAppSelector(state => state.valueOrientations)
	const department = (router.query.department as string)?.replace('-', ' ')
	const group = router.query.group as string
	const id = router.query.student as string

	const breadCrumbs = useGenerateBreadcrumbs(router)
	const { studentsResult } = useGetStudentResult(department, group, id)
	return (
		<UserLayout>
			<Heading textAlign='center' as='h2' size='md' py='4'>
				Студент
			</Heading>
			<Breadcrumb
				mb='2'
				listProps={{
					flexWrap: 'wrap',
				}}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/' as={NextLink}>
						Отделения
					</BreadcrumbLink>
				</BreadcrumbItem>
				{breadCrumbs?.map((item, i) => (
					<BreadcrumbItem
						key={item.href}
						isCurrentPage={i === breadCrumbs.length - 1 ? true : false}>
						<BreadcrumbLink href={item.href} as={i === breadCrumbs.length - 1 ? 'span' : NextLink}>
							{i === breadCrumbs.length - 1
								? `${studentsResult?.userName ? studentsResult?.userName : ''}`
								: item.title}
						</BreadcrumbLink>
					</BreadcrumbItem>
				))}
			</Breadcrumb>
			<ValueOrientationTableResult result={studentsResult?.result} />
		</UserLayout>
	)
}

export default Student
