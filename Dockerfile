FROM node:12 AS angular-image 
#image à partir de laquelle on compose notre image custom

WORKDIR /usr/src/app 
#dossier dans lequel on travaille à l'intérieur du conteneur

COPY package.json . 
#on cpoie le fichier donnant toutes les dépendances nécessaires a notre projet

RUN npm install -g @angular/cli@9.1.7 
#on install le CLI d'Angular a l'intérieur du conteneur
RUN npm install 
#cette commande installe toutes les dépendances précisées dans package.json

COPY . . 
#on copie tous les fichiers de notre projet dans le répertoire de travail à l'intérieur du conteneur

RUN npm run build 
#on build le projet Angular afin de vérifier qu'il n'y a pas d'erreur

FROM nginx 
#on rajoute la composante Nginx
COPY default.conf /etc/nginx/conf.d/default.conf 
#on copie notre fichier de configuration à l'intérieur du conteneur
COPY --from=angular-image /usr/src/app/dist /usr/share/nginx/html 
#on copie le projet angular à partir de l'image précedente dans l'image nginx

EXPOSE 8080 
#on expose le port précisé dans le fichier de configuration nginx
