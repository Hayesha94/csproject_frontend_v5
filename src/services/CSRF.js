import API from '@/services/Service.js'

export default {
	getCSRFToken() {
		return API.get('/csrf-cookie');
	}
}