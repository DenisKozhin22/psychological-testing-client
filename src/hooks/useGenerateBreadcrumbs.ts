import { NextRouter } from 'next/router'

export const useGenerateBreadcrumbs = (router: NextRouter) => {
	const decodeUrl = decodeURI(router.asPath)

	const asPathWithoutQuery = decodeUrl.split('?')[0]

	const asPathNestedRoutes = asPathWithoutQuery.split('/').filter(v => v.length > 0)

	asPathNestedRoutes.shift()

	const crumblist = asPathNestedRoutes.map((subpath, i) => {
		const href = `/departments/${asPathNestedRoutes.slice(0, i + 1).join('/')}`
		return { href, title: subpath.replace('-', ' ') }
	})

	return [...crumblist]
}
