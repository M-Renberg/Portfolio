export function navigate()
{
    const hash = window.location.hash.substring(1) || 'start';
    const articles = document.querySelectorAll('main article');
    const header = document.querySelector('#main-header');

    if (hash === 'start')
    {
        header.classList.add('hidden');
    }
    else
    {
        header.classList.remove('hidden');
    }

    articles.forEach(article =>{
        if(article.id === hash)
        {
            article.classList.add('active');
        }
        else
        {
            article.classList.remove('active');
        }
    });
}
