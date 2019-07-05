export const getUsers = () =>
    window.axios.get("https://jsonplaceholder.typicode.com/users")

export const deleteUser = id =>
    window.axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)