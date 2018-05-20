export const apiGet = (url) => () => fetch(url).then(v => v.json());
export const apiPut = (url, id, obj) => () =>
fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringfy(obj),
    headers: new Headers({'Content-type': 'application/json'})
}).then(v => v.json())