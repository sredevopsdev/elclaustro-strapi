module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'ojaymegpyklnyipispgb.db.sa-east-1.nhost.runDATABA'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'SE_PORT=5432'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'n1c0l4S!?!?!?'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
