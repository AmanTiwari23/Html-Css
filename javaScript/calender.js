let tbody = document.querySelector("#tbody");
let day = ["sun","mon","tue","wed","tha","fri","sat"];
let month =["jan","feb","mar","apr","may","jun","jul","aug","set","oct","nov","dec"];

let time = new Date();

tbody.innerHTML = `
<tr>
<td >${time.getDate()} </td>
</tr>
`
