<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion flex-column"
    id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/">
    </a>

    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3"><sup>너와 나의</sup> 사이</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />


    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <a
        class="nav-link"
        href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Home</span></a>
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
        href="#/friend">
        <i class="fas fa-fw fa-cog"></i>
        <span>Friends</span>
      </a>
    </li>

    <!-- Nav Item - Events Menu -->
    <li class="nav-item">
      <a
        class="nav-link "
        href="#/event">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Events</span>
      </a>
    </li>

    <li class="nav-item">
      <a
        class="nav-link"
        href="#/analysis">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Analysis</span>
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
        href="#/profile">
        <i class="fas fa-fw fa-folder"></i>
        <span>Profile</span>
      </a>
    </li>

    <!-- Nav Item - About -->
    <li class="nav-item">
      <a
        class="nav-link"
        href="#/about">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>About</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
      <br />
      <img
        class="sidebar-card-illustration mb-3"
        src="../img/profile/devRaphy.png" 
        onerror="no image" />
      <p class="text-center mb-3">
        made by <strong>DevRaphy</strong>
      </p>
      <a
        class="btn btn-info btn-sm"
        href="https://github.com/devraphy"
        target="_blank">Link To GitHub</a>
      <br />
      <a
        class="btn btn-info btn-sm"
        href="https://devraphy.tistory.com"
        target="_blank">Link To Tech Blog</a>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>