let navbare = document.querySelector(".navbare");
let open_nav = document.getElementById("open_nav");
let close_nav = document.getElementById("close_nav");

open_nav.onclick = () => {
  navbare.classList.add("new-navbare");
  open_nav.style.display = "none";
};
close_nav.onclick = () => {
  navbare.classList.remove("new-navbare");
  open_nav.style.display = "block";
};
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("scroll_header", window.scrollY > 0);
});

let inscription = document.querySelector(".inscription");
let close_form = document.getElementById("close_form");
let open_form = document.getElementById("open_form");

open_form.addEventListener("click", () => {
  inscription.style.display = "flex";
});

close_form.addEventListener("click", () => {
  inscription.style.display = "none";
});

let text_container = document.querySelectorAll(".only_content");

let Name = document.querySelector(".name");
let work = document.querySelector(".work");
let comment_forme = document.querySelector(".comment_forme");

const select_comment = () => {
  text_container.forEach((item) => {
    item.addEventListener("click", (btn) => {
      text_container.forEach((i) => {
        i.querySelector(".starts").classList.remove("active");
        i.querySelector(".onfo h2").classList.remove("active_name_user");
        i.classList.remove("active-animation");
      });

      let category = btn.currentTarget.querySelector(".category");
      let starts = btn.currentTarget.querySelector(".starts");
      let onfoHeader = btn.currentTarget.querySelector(".onfo h2");

      starts.classList.add("active");
      onfoHeader.classList.add("active_name_user");
      btn.currentTarget.classList.add("active-animation");

      console.log(category.textContent);

      switch (category.textContent.trim()) {
        case "Financial Apps":
          Name.innerHTML = "David Martino";
          work.innerHTML = "CEO of David Company";
          comment_forme.innerHTML =
            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
          break;
        case "Digital Business":
          Name.innerHTML = "Jake H. Nyo";
          work.innerHTML = "CTO of Digital Company";
          comment_forme.innerHTML =
            "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
          break;
        case "Business & Economics":
          Name.innerHTML = "May C.";
          work.innerHTML = "Founder of Catherina Co.";
          comment_forme.innerHTML =
            "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
          break;
        case "New App Ecosystem":
          Name.innerHTML = "Random Staff";
          work.innerHTML = "Manager, Digital Company";
          comment_forme.innerHTML =
            "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
          break;
        case "Web Development":
          Name.innerHTML = "Mark Am";
          work.innerHTML = "CTO, Amber Do Company";
          comment_forme.innerHTML =
            "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
          break;
        default:
          console.log("Category not recognized.");
      }

      setTimeout(() => {
        btn.currentTarget.classList.remove("active-animation");
      }, 600);
    });
  });
};

select_comment();

let back_btn_1 = document.querySelector(".back_btn_1");
let close_logine_form = document.getElementById("close_logine_form");
let open_logine_form = document.querySelector(".open_logine_form");
let open_sign_up_form = document.querySelector(".open_sign_up_form");
let form_inscription = document.querySelector(".form_inscription");
let logine_form = document.querySelector(".logine_form");
open_logine_form.onclick = () => {
  form_inscription.style.display = "none";
  logine_form.style.display = "flex";
};
back_btn_1.onclick = () => {
  form_inscription.style.display = "flex";
  logine_form.style.display = "none";
};
close_logine_form.onclick = () => {
  inscription.style.display = "none";
};

let logine_form_2 = document.querySelector(".logine_form_2");
let close_sign_in_form = document.getElementById("close_sign_in_form");
let back_btn_2 = document.querySelector(".back_btn_2");

open_sign_up_form.onclick = () => {
  logine_form_2.style.display = "flex";
  form_inscription.style.display = "none";
};
back_btn_2.onclick = () => {
  logine_form_2.style.display = "none";
  form_inscription.style.display = "flex";
};
close_sign_in_form.onclick = () => {
  inscription.style.display = "none";
};
let back_btn_3 = document.querySelector(".back_btn_3");
let close_forgot_form = document.getElementById("close_forgot_form");
let open_forot_form = document.querySelector(".open_forot_form");
let forgot_form_2 = document.querySelector(".forgot_form_2");
open_forot_form.onclick = () => {
  forgot_form_2.style.display = "flex";
  logine_form.style.display = "none";
};
back_btn_3.onclick = () => {
  forgot_form_2.style.display = "none";
  logine_form.style.display = "flex";
};
close_forgot_form.onclick=()=>{
  inscription.style.display="none"
}