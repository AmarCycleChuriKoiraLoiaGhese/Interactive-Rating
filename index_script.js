console.log(document.getElementsByClassName("rating-container")[0]);
const spans = document.getElementsByClassName("rating-container")[0].getElementsByTagName("span");
for (const span of spans)
    span.addEventListener("click", selectRating);    

function selectRating(event)
{
    let siblings = event.currentTarget.parentElement.children;
    console.log(siblings);
    for (const sibling of siblings)
    {
        console.log(sibling);
        sibling.classList.remove("highlight")
    }

    event.currentTarget.classList.add("highlight");
    
    let link = document.getElementById("submit-link");
    link.setAttribute("href", "thanks-page/thanks.html");
}