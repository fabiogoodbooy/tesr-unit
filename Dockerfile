#FROM centos
#RUN yum install
#RUN cd /etc/yum.repos.d/
#RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
#RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
#RUN yum update -y
#RUN yum install -y wget
#RUN yum -y zip

#Utilise l'image Node.js version 18 comme image de base
FROM node:18
#Defenit le répertoire de travail dans l'image Docker
WORKDIR /app
#copie le contenu du projet dans l'image Docker
COPY . .
#Exécute la commande npm install pour installer les dépendances
RUN npm install
#Expose le port 4200 sur lequel l'application sera accessible
EXPOSE 4200
#Défenit la commande de démarrage de l'application
CMD ["npm","start"]
