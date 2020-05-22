import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .required('A name is required for the order'),
    size: yup.string().required('Please choose a size'),
    sauce: yup.string().required('Please choose a sauce')

})

export default formSchema