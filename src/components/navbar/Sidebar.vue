<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion flex-column"
    id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <!-- <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/">
    </a> -->
    <hr />
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#">
      <div class="sidebar-brand-icon rotate-n-15">
        <!-- <i class="fas fa-laugh-wink"></i> -->
      </div>
      <div class="sidebar-brand-text mx-3"><sup>너와 나의</sup> 사이</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />


    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <a
        class="nav-link"
        href="#">&nbsp;
        <i class="fa-solid fa-house"></i>
        <span>&nbsp;Home</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      Services
    </div>

    <!-- Nav Item - Friends Menu -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#/friend">&nbsp;
        <i class="fa-solid fa-fw fa-user-group"></i>
        <span>&nbsp;Friends</span>
      </a>
    </li>

    <!-- Nav Item - Events Menu -->
    <li class="nav-item">
      <a
        class="nav-link "
        href="#/event">&nbsp;
        <i class="fa-solid fa-calendar-days"></i>
        <span>&nbsp;Events</span>
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        href="#/analysis">&nbsp;
        <i class="fa-solid fa-chart-line"></i>
        <span>&nbsp;Analysis</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      Additional
    </div>

    <!-- Nav Item - Profile -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#/profile">&nbsp;
        <i class="fa-solid fa-user-astronaut"></i>
        <span>&nbsp;Profile</span>
      </a>
    </li>
    
    <!-- Nav Item - Visit -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#/visit">&nbsp;
        <i class="fa-solid fa-comment-dots"></i>
        <span>&nbsp;Visitors</span></a>
    </li>

    <!-- Nav Item - About -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#/about">&nbsp;
        <i class="fa-solid fa-circle-question"></i>
        <span>&nbsp;About</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
      <br />
      <img
        class="sidebar-card-illustration mb-3"
        src="../../img/profile/devRaphy.png" 
        onerror="no image" />
      <p class="text-center mb-3">
        made by <strong>DevRaphy</strong>
      </p>
      <a
        class="btn btn-info btn-sm"
        href="https://devraphy.tistory.com"
        target="_blank">Link to Blog</a>
      <br />
      <a
        class="btn btn-info btn-sm"
        href="https://github.com/devraphy"
        target="_blank">Link to GitHub</a>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>