export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.server) return

	// Will be implemented in the future, when i want to add auth for downloading files --> CV
})
