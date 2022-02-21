import toast from 'react-hot-toast'
import axios from 'axios'

export const addAnswer = (answerContent, question) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'
        const res = await axios.post(`${base_Url}/api/v1/answer/add`, {
            answerContent, question
        })
        console.log(res.data)
        const { answer, message } = res.data
        if (answer) {
            toast.success(message)
            window.location.href = '/';
            dispatch({
                type: "ADD_ANSWER",
                payload: { answer }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_ANSWER_FAILED"
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};