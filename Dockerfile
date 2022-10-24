# Instructions to How app will work 
#========= Development stage ===============
# To specify environment version
FROM node:16.17.1 as base
#Create folder inside docker
WORKDIR /app
#To copy packages file app inside our container 
COPY package.json /app
ARG NODE_ENV
#To run installion command from package.json packages 
#RUN if ["$NODE_ENV"="production"];\
#    then npm install --only=production;\
#    else npm install;\
#    fi
RUN npm install
#Copy project files
COPY . /app
EXPOSE $PORT
CMD [ "npm","start" ]

#========= Development stage ===============
# To specify environment version
FROM base as development
#Create folder inside docker
WORKDIR /app
#To copy packages file app inside our container 
COPY package.json /app
ARG NODE_ENV
#To run installion command from package.json packages 
#RUN if ["$NODE_ENV"="production"];\
#    then npm install --only=production;\
#    else npm install;\
#    fi
RUN npm install
#Copy project files
COPY . /app
EXPOSE $PORT
CMD [ "npm","start" ]



# Instructions to How app will work 
#========= Production stage ===============
FROM base as production
#Create folder inside docker
WORKDIR /app
#To copy packages file app inside our container 
COPY package.json /app
ARG NODE_ENV
#To run installion command from package.json packages 
#RUN if ["$NODE_ENV"="production"];\
#    then npm install --only=production;\
#    else npm install;\
#    fi
RUN npm install --only=production
#Copy project files
COPY . /app
EXPOSE $PORT
CMD [ "npm","start" ]