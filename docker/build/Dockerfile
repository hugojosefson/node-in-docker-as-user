FROM node:5

# Drop root, run as user 'app'
RUN adduser --disabled-password app
USER app

# Build directory
RUN mkdir -p /home/app/build

# Cache node_modules as long as package.json stays the same
COPY ./package.json /home/app/build/
USER root
RUN chown -R app:app /home/app/build/
USER app
RUN cd /home/app/build && npm install

# Copy project source code
COPY . /home/app/build
USER root
RUN chown -R app:app /home/app/build/
USER app

# Build slug.tgz
WORKDIR /home/app/build
CMD [ "npm", "run", "slug" ]