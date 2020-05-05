const tabs = () => {
  const bindTabs = (headerTabsSelector, tabsSelector, contentTabsSelector, activeTabSelector, noPortfolio) => {
    const containerTabs = document.querySelector(headerTabsSelector);
    let tabs = Array.from(document.querySelectorAll(tabsSelector));
    let content = Array.from(document.querySelectorAll(contentTabsSelector));
    const active = document.querySelector(activeTabSelector);
    const activeClassText = activeTabSelector.replace(/\./, '');
    const portfolioText = document.querySelector(noPortfolio);
    let filteredPhoto = [];

    containerTabs.addEventListener('click', (e) => {
      const target = e.target;
      hideTabs();
      if (target && (target.tagName === tabsSelector || target.tagName === 'LI')) {
        tabs.forEach((item, idx) => {
          if (target.classList.contains(item.getAttribute('class'))) {
            showTabs(target.getAttribute('class'), idx);
          }
        })
      };
    })

    function hideTabs() {
      tabs.forEach((item) => {
        item.classList.remove(activeClassText);
      })

      filteredPhoto.forEach((item) => {
        item.classList.remove('animated', 'fadeIn');
        item.style.display = 'none';
      })
      portfolioText.classList.remove('animated', 'fadeIn');
      portfolioText.style.display = 'none';
    }

    function showTabs(filterName, idx = 0) {
      tabs[idx].classList.add(activeClassText);

      if(tabs.length - idx === 1 || tabs.length - idx === 2) {
        portfolioText.style.display = 'block';
        portfolioText.classList.add('animated', 'fadeIn');
        return;
      }

      filteredPhoto = content.filter((item) => {
        if (item.classList.contains(filterName)) {
          item.classList.add('animated', 'fadeIn');
          return item.style.display = 'block';
        }
      });
    }

    hideTabs();
    showTabs('all')
  };

  bindTabs('.portfolio-menu', '.portfolio-menu li', '.portfolio-wrapper .portfolio-block', '.active', '.portfolio-no');
};
export default tabs;