export default async function submitForm(query) {
    await new Promise((res) => {
        setTimeout(res, 1000)
        console.log('Form submitted with query:', query)
    });
}