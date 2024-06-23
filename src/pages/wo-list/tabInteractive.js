document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('[data-tabs-target]')
  const tabContents = document.querySelectorAll('[role="tabpanel"]')

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const target = document.querySelector(tab.dataset.tabsTarget)

      tabContents.forEach(tc => {
        tc.classList.add('hidden')
      })

      tabs.forEach(t => {
        t.classList.remove('border-blue-600', 'text-blue-600')
        t.setAttribute('aria-selected', 'false')
      })

      target.classList.remove('hidden')
      tab.classList.add('border-blue-600', 'text-blue-600')
      tab.setAttribute('aria-selected', 'true')
    })
  })
})