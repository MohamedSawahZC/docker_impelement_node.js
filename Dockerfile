# Instructions to How app will work 

# To specify environment version
FROM node:16.17.1

#Create folder inside docker
WORKDIR /app
#To copy packages file app inside our container 
COPY package.json /app



#To run installion command from package.json packages 

RUN npm install



# Copy project files

COPY . /app


EXPOSE $PORT

CMD [ "npm","start" ]



