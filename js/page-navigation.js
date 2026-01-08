export function navigate()
{
    const hash = window.location.hash.substring(1) || 'start';

    const articles = document.querySelectorAll('main article');

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
