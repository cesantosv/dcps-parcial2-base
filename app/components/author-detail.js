import Component from '@ember/component';

export default Component.extend({
    actions:{
        delete(author,posts) {
            const oe = author.posts.length;
            const oe2 = oe - 1 ;
            
            posts.destroyRecord();
            this.set('posts',posts);
            this.set('deletePost',true)
            alert('En la consola se puede observar que fue borrado, pero no se pudo refrescar!')
            setTimeout(() => {
                this.set('deletePost', false);
            }, 10000);
            
        },
        
    }
});
