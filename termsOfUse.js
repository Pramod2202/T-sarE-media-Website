var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
    var tab_data = list.getAttribute("data-tc");
    
    tab_lists.forEach(function(list){
      list.classList.remove("active");
    });
    list.classList.add("active");
    
    tab_items.forEach(function(item){
      var tab_class = item.getAttribute("class").split(" ");
      if(tab_class.includes(tab_data)){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
      
    })
    
  })
})

document.addEventListener("DOMContentLoaded", function() {
    // Get all the tab items and sidebar elements
    const tabItems = document.querySelectorAll('.tab_item');
    const sidebarItems = document.querySelectorAll('.tabs_list ul li');
  
    // Get the index of the currently active tab
    let activeTabIndex = 0;
  
    // Function to hide all tab items except the active one
    function hideAllTabsExceptActive() {
      tabItems.forEach(function(tab, index) {
        if (index !== activeTabIndex) {
          tab.style.display = 'none';
        }
      });
    }
  
    // Function to update sidebar hover effect
    function updateSidebarHoverEffect() {
      sidebarItems.forEach(function(item, index) {
        if (index === activeTabIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    // Initially, hide all tabs except the first one and update sidebar hover effect
    hideAllTabsExceptActive();
    updateSidebarHoverEffect();
  
    // Event listener for the "Agree" button
    const agreeButton = document.querySelector('.agree');
    agreeButton.addEventListener('click', function() {
      // Hide the currently active tab
      tabItems[activeTabIndex].style.display = 'none';
      // Move to the next tab (if available)
      activeTabIndex++;
      if (activeTabIndex < tabItems.length) {
        // Show the next tab and update sidebar hover effect
        tabItems[activeTabIndex].style.display = 'block';
        updateSidebarHoverEffect();
      } else {
        // If there are no more tabs, do something (e.g., redirect to another page)
        console.log('No more tabs available');
      }
    });
  });
  