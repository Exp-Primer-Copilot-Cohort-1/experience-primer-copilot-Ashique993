function skillsMember() {
    var member = document.getElementById('member');
    var skills = document.getElementById('skills');
    var memberOffset = member.offsetTop;
    var memberHeight = member.offsetHeight;
    var skillsHeight = skills.offsetHeight;
    var skillsOffset = skills.offsetTop;
    var scrollTop = window.pageYOffset;
    var windowHeight = window.innerHeight;
  
    if (scrollTop > (memberOffset + memberHeight - skillsHeight)) {
      skills.style.position = 'absolute';
      skills.style.top = memberOffset + memberHeight - skillsHeight + 'px';
    } else if (scrollTop > memberOffset) {
      skills.style.position = 'fixed';
      skills.style.top = 0;
    } else {
      skills.style.position = 'absolute';
      skills.style.top = memberOffset + 'px';
    }
  }