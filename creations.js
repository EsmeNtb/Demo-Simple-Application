const creations = [
    {
        title: 'Pixel Dungeon Jam',
        category: 'games',
        year: '2025',
        description:
            'A 48-hour game jam project featuring a roguelike adventure with hand-drawn tiles.',
        image: 'images/pixel-dungeon.jpg',
        imageAlt: 'Pixel Dungeon Jam game screenshot',
        tags: ['Unity', 'Pixel Art'],
        link: 'https://itch.io/'
    },

    {
        title: 'Fantasy Environment Pack',
        category: 'assets',
        year: '2025',
        description:
            'A collection of fantasy environment assets created for independent game developers.',
        image: 'images/fantasy-assets.jpg',
        imageAlt: 'Fantasy environment game assets',
        tags: ['Blender', '3D Assets', 'Game Design'],
        link: '#'
    },

    {
        title: 'Dream Portrait Commission',
        category: 'commissions',
        year: '2024',
        description:
            'A digital portrait commission inspired by dreamlike lighting and botanical details.',
        image: 'images/portrait-commission.jpg',
        imageAlt: 'Digital portrait art commission',
        tags: ['Digital Art', 'Portrait'],
        link: '#'
    }
];


document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('creations-grid');
    const noResults = document.getElementById('no-results');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!grid || !noResults) {
        return;
    }

    let activeFilter = 'all';


    function renderCards(filter = 'all') {
        const filteredCreations =
            filter === 'all'
                ? creations
                : creations.filter(function (creation) {
                    return creation.category === filter;
                });

        grid.innerHTML = filteredCreations
            .map(createCardHTML)
            .join('');

        noResults.hidden = filteredCreations.length > 0;
    }


    function createCardHTML(item) {
        const badgeLabels = {
            games: 'Games',
            assets: 'Assets',
            commissions: 'Art Commissions'
        };

        const badgeLabel =
            badgeLabels[item.category] || 'Creation';

        const tagsHTML = item.tags
            .map(function (tag) {
                return `
                    <span class="tech-tag">
                        ${escapeHTML(tag)}
                    </span>
                `;
            })
            .join('');

        return `
            <article
                class="creation-card"
                data-category="${escapeHTML(item.category)}"
            >

                <div class="creation-image">
                    <img
                        src="${escapeHTML(item.image)}"
                        alt="${escapeHTML(item.imageAlt)}"
                    >

                    <span class="creation-badge">
                        ${escapeHTML(badgeLabel)}
                    </span>
                </div>

                <div class="creation-body">

                    <p class="creation-meta">
                        ${escapeHTML(item.year)}
                    </p>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p class="creation-description">
                        ${escapeHTML(item.description)}
                    </p>

                    <div class="creation-tags">
                        ${tagsHTML}
                    </div>

                    <a
                        href="${escapeHTML(item.link)}"
                        class="btn-secondary creation-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>

                </div>

            </article>
        `;
    }


    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            filterButtons.forEach(function (otherButton) {
                otherButton.classList.remove('active');
            });

            button.classList.add('active');

            activeFilter = button.dataset.filter;

            renderCards(activeFilter);
        });
    });


    renderCards();
});


function escapeHTML(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}