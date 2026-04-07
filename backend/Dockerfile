# Build
FROM eclipse-temurin:17-jdk-jammy AS builder
WORKDIR /opt/app

COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw

COPY . .

ARG APP_MODULE=api
RUN test -n "$APP_MODULE" || (echo "APP_MODULE build-arg is required" && exit 1)

RUN ./mvnw -pl "$APP_MODULE" -am clean package -DskipTests

# Run
FROM eclipse-temurin:17-jre-jammy
WORKDIR /opt/app
EXPOSE 8080

ARG APP_MODULE=api
COPY --from=builder /opt/app/${APP_MODULE}/target/*.jar /opt/app/app.jar

ENTRYPOINT ["java","-jar","/opt/app/app.jar"]