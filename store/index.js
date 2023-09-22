export const state = () => ({
	modalOpened: false
})

export const mutations = {
	toggleModal(state) {
		state.modalOpened = !state.modalOpened
	},
}