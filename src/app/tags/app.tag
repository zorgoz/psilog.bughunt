<app>
<main>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#work-book">Workbook</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
    </ul>
  </div>
</nav>
<div>
	<button onclick={ Workbook }>Workbook</button>
	<button onclick={ About }>About</button>
</div>

<router>
    <route path="work-book"><work-book-page /></route>
    <route path="about"><about-page /></route>
</router>
</main>

About(){
    route('about')
}

Workbook(){
    route('work-book')
}

</app>

