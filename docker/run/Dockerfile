FROM node:5

# Drop root, run as user 'app'
RUN adduser --disabled-password app
USER app

# Unpack app
RUN mkdir -p /home/app/run
COPY ./target/slug.tgz /home/app/
RUN cd /home/app/run && tar xzf ../slug.tgz
RUN rm /home/app/slug.tgz

# Configure
ENV NODE_ENV production

# Run
WORKDIR /home/app/run
CMD [ "npm", "start" , "--production"]