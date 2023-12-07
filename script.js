async function dataData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await response.json();

  jsonData.forEach(entry => {
    let infoBox = document.getElementsByClassName("infobox")[0];
    let newBox = infoBox.cloneNode(true);
    
    const title = entry.title;
    const description = entry.body;

    const accordion = newBox.getElementsByClassName('accordion')[0];
    accordion.textContent = title;

    const panel = newBox.getElementsByClassName('panel')[0];
    panel.textContent = description;

    let faq = document.getElementById("faq");
    faq.appendChild(newBox);
  });
}




addEventListener("load", async (event) => {
  await dataData();
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } 
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});