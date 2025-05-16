export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.server) return

	// console.log('➤ ~ defineNuxtRouteMiddleware ~ to:', to.path)
	// try {
	// 	const user = await getCurrentUser()
	// 	console.log('➤ ~ defineNuxtRouteMiddleware ~ user:', user)

	// 	// redirect to the home page if the user is already logged in and wants to access the login page
	// 	if (user && to.path === '/login') {
	// 		console.log('User is already logged in, redirecting to home page.')
	// 		return navigateTo('/')
	// 	}

	// 	// redirect the user to the login page
	// 	if (!user && to.path !== '/login') {
	// 		console.log('User is not logged in, redirecting to login page.')
	// 		return navigateTo('/login')
	// 	}
	// } catch (error) {
	// 	console.error('Error in auth middleware:', error)
	// 	// Optionally, you can redirect to an error page or show a notification
	// 	throw createError({
	// 		statusCode: 500,
	// 		statusMessage: 'Internal Server Error',
	// 		message: 'An error occurred while checking authentication status.',
	// 		data: error,
	// 	})
	// }
})
