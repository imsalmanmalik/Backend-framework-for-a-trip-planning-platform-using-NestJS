"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet = require("helmet");
const session = require("express-session");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    app.use(helmet());
    app.use(session({
        secret: config_1.Config.secret,
        resave: false,
        saveUninitialized: false,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('PYT')
        .setDescription('PYT API Documentation')
        .setVersion('1.0')
        .addTag('PYT')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(config_1.Config.port);
}
bootstrap();
//# sourceMappingURL=main.js.map