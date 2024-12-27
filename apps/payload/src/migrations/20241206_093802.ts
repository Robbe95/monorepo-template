import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_form_builder_blocks_form_input_block_type" AS ENUM('text', 'email', 'password', 'number', 'date', 'tel');
  CREATE TYPE "public"."enum_home_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_page_v_published_locale" AS ENUM('en', 'nl', 'fr');
  CREATE TABLE IF NOT EXISTS "pages_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"hubspot_form_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"hubspot_form_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "form_builder_blocks_form_input_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"is_required" boolean DEFAULT false NOT NULL,
  	"type" "enum_form_builder_blocks_form_input_block_type",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "form_builder_blocks_form_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"colums" numeric NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "form_builder" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_builder_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	CONSTRAINT "form_builder_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "form_submission" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"form_id" uuid NOT NULL,
  	"submission" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_hubspot" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"form_id" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_hubspot_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	CONSTRAINT "form_hubspot_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"background_image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_image_text_square" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"call_to_action_label" varchar,
  	"call_to_action_link" varchar,
  	"first_image_id" uuid,
  	"text" varchar,
  	"second_image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_product_selection_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"product_image_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_product_selection" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_projects_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"hubspot_form_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_page" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_status" "enum_home_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_locales" (
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	CONSTRAINT "home_page_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "home_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"projects_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"background_image_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_image_text_square" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"call_to_action_label" varchar,
  	"call_to_action_link" varchar,
  	"first_image_id" uuid,
  	"text" varchar,
  	"second_image_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_product_selection_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"product_image_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_product_selection" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_projects_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"hubspot_form_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"version__status" "enum__home_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__home_page_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_locales" (
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	CONSTRAINT "_home_page_v_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "_home_page_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"projects_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "settings" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"hubspot_portal_id" varchar,
  	"hubspot_access_token" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "form_builder_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "form_submission_id" uuid;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "form_hubspot_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hubspot_form" ADD CONSTRAINT "pages_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hubspot_form" ADD CONSTRAINT "pages_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hubspot_form" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hubspot_form" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_builder_blocks_form_input_block" ADD CONSTRAINT "form_builder_blocks_form_input_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_builder"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_builder_blocks_form_grid_block" ADD CONSTRAINT "form_builder_blocks_form_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_builder"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_builder_locales" ADD CONSTRAINT "form_builder_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_builder"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submission" ADD CONSTRAINT "form_submission_form_id_form_builder_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."form_builder"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_hubspot_locales" ADD CONSTRAINT "form_hubspot_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_hubspot"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_hero" ADD CONSTRAINT "home_page_blocks_hero_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_hero" ADD CONSTRAINT "home_page_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_image_text_square" ADD CONSTRAINT "home_page_blocks_image_text_square_first_image_id_images_id_fk" FOREIGN KEY ("first_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_image_text_square" ADD CONSTRAINT "home_page_blocks_image_text_square_second_image_id_images_id_fk" FOREIGN KEY ("second_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_image_text_square" ADD CONSTRAINT "home_page_blocks_image_text_square_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_product_selection_products" ADD CONSTRAINT "home_page_blocks_product_selection_products_product_image_id_images_id_fk" FOREIGN KEY ("product_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_product_selection_products" ADD CONSTRAINT "home_page_blocks_product_selection_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_blocks_product_selection"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_product_selection" ADD CONSTRAINT "home_page_blocks_product_selection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_projects_block" ADD CONSTRAINT "home_page_blocks_projects_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_hubspot_form" ADD CONSTRAINT "home_page_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_blocks_hubspot_form" ADD CONSTRAINT "home_page_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_locales" ADD CONSTRAINT "home_page_locales_seo_image_id_images_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_locales" ADD CONSTRAINT "home_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_hero" ADD CONSTRAINT "_home_page_v_blocks_hero_background_image_id_images_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_hero" ADD CONSTRAINT "_home_page_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_image_text_square" ADD CONSTRAINT "_home_page_v_blocks_image_text_square_first_image_id_images_id_fk" FOREIGN KEY ("first_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_image_text_square" ADD CONSTRAINT "_home_page_v_blocks_image_text_square_second_image_id_images_id_fk" FOREIGN KEY ("second_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_image_text_square" ADD CONSTRAINT "_home_page_v_blocks_image_text_square_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_product_selection_products" ADD CONSTRAINT "_home_page_v_blocks_product_selection_products_product_image_id_images_id_fk" FOREIGN KEY ("product_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_product_selection_products" ADD CONSTRAINT "_home_page_v_blocks_product_selection_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v_blocks_product_selection"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_product_selection" ADD CONSTRAINT "_home_page_v_blocks_product_selection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_projects_block" ADD CONSTRAINT "_home_page_v_blocks_projects_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_hubspot_form" ADD CONSTRAINT "_home_page_v_blocks_hubspot_form_hubspot_form_id_form_hubspot_id_fk" FOREIGN KEY ("hubspot_form_id") REFERENCES "public"."form_hubspot"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_blocks_hubspot_form" ADD CONSTRAINT "_home_page_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_locales" ADD CONSTRAINT "_home_page_v_locales_version_seo_image_id_images_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_locales" ADD CONSTRAINT "_home_page_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_rels" ADD CONSTRAINT "_home_page_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_page_v_rels" ADD CONSTRAINT "_home_page_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_hubspot_form_order_idx" ON "pages_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hubspot_form_parent_id_idx" ON "pages_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hubspot_form_path_idx" ON "pages_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hubspot_form_locale_idx" ON "pages_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hubspot_form_hubspot_form_idx" ON "pages_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hubspot_form_order_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hubspot_form_parent_id_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hubspot_form_path_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hubspot_form_locale_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hubspot_form_hubspot_form_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_input_block_order_idx" ON "form_builder_blocks_form_input_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_input_block_parent_id_idx" ON "form_builder_blocks_form_input_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_input_block_path_idx" ON "form_builder_blocks_form_input_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_grid_block_order_idx" ON "form_builder_blocks_form_grid_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_grid_block_parent_id_idx" ON "form_builder_blocks_form_grid_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_builder_blocks_form_grid_block_path_idx" ON "form_builder_blocks_form_grid_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "form_builder_updated_at_idx" ON "form_builder" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_builder_created_at_idx" ON "form_builder" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submission_form_idx" ON "form_submission" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submission_updated_at_idx" ON "form_submission" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submission_created_at_idx" ON "form_submission" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_hubspot_updated_at_idx" ON "form_hubspot" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_hubspot_created_at_idx" ON "form_hubspot" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hero_order_idx" ON "home_page_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hero_parent_id_idx" ON "home_page_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hero_path_idx" ON "home_page_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hero_locale_idx" ON "home_page_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hero_background_image_idx" ON "home_page_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_order_idx" ON "home_page_blocks_image_text_square" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_parent_id_idx" ON "home_page_blocks_image_text_square" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_path_idx" ON "home_page_blocks_image_text_square" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_locale_idx" ON "home_page_blocks_image_text_square" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_first_image_idx" ON "home_page_blocks_image_text_square" USING btree ("first_image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_image_text_square_second_image_idx" ON "home_page_blocks_image_text_square" USING btree ("second_image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_products_order_idx" ON "home_page_blocks_product_selection_products" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_products_parent_id_idx" ON "home_page_blocks_product_selection_products" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_products_locale_idx" ON "home_page_blocks_product_selection_products" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_products_product_image_idx" ON "home_page_blocks_product_selection_products" USING btree ("product_image_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_order_idx" ON "home_page_blocks_product_selection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_parent_id_idx" ON "home_page_blocks_product_selection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_path_idx" ON "home_page_blocks_product_selection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_product_selection_locale_idx" ON "home_page_blocks_product_selection" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_projects_block_order_idx" ON "home_page_blocks_projects_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_projects_block_parent_id_idx" ON "home_page_blocks_projects_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_projects_block_path_idx" ON "home_page_blocks_projects_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_projects_block_locale_idx" ON "home_page_blocks_projects_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hubspot_form_order_idx" ON "home_page_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hubspot_form_parent_id_idx" ON "home_page_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hubspot_form_path_idx" ON "home_page_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hubspot_form_locale_idx" ON "home_page_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "home_page_blocks_hubspot_form_hubspot_form_idx" ON "home_page_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX IF NOT EXISTS "home_page__status_idx" ON "home_page" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "home_page_seo_seo_image_idx" ON "home_page_locales" USING btree ("seo_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "home_page_rels_order_idx" ON "home_page_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "home_page_rels_parent_idx" ON "home_page_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "home_page_rels_path_idx" ON "home_page_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "home_page_rels_projects_id_idx" ON "home_page_rels" USING btree ("projects_id","locale");
  CREATE INDEX IF NOT EXISTS "home_page_rels_locale_idx" ON "home_page_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hero_order_idx" ON "_home_page_v_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hero_parent_id_idx" ON "_home_page_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hero_path_idx" ON "_home_page_v_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hero_locale_idx" ON "_home_page_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hero_background_image_idx" ON "_home_page_v_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_order_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_parent_id_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_path_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_locale_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_first_image_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("first_image_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_image_text_square_second_image_idx" ON "_home_page_v_blocks_image_text_square" USING btree ("second_image_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_products_order_idx" ON "_home_page_v_blocks_product_selection_products" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_products_parent_id_idx" ON "_home_page_v_blocks_product_selection_products" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_products_locale_idx" ON "_home_page_v_blocks_product_selection_products" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_products_product_image_idx" ON "_home_page_v_blocks_product_selection_products" USING btree ("product_image_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_order_idx" ON "_home_page_v_blocks_product_selection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_parent_id_idx" ON "_home_page_v_blocks_product_selection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_path_idx" ON "_home_page_v_blocks_product_selection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_product_selection_locale_idx" ON "_home_page_v_blocks_product_selection" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_projects_block_order_idx" ON "_home_page_v_blocks_projects_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_projects_block_parent_id_idx" ON "_home_page_v_blocks_projects_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_projects_block_path_idx" ON "_home_page_v_blocks_projects_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_projects_block_locale_idx" ON "_home_page_v_blocks_projects_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hubspot_form_order_idx" ON "_home_page_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hubspot_form_parent_id_idx" ON "_home_page_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hubspot_form_path_idx" ON "_home_page_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hubspot_form_locale_idx" ON "_home_page_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_blocks_hubspot_form_hubspot_form_idx" ON "_home_page_v_blocks_hubspot_form" USING btree ("hubspot_form_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_version_version__status_idx" ON "_home_page_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_home_page_v_created_at_idx" ON "_home_page_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_home_page_v_updated_at_idx" ON "_home_page_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_home_page_v_snapshot_idx" ON "_home_page_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_home_page_v_published_locale_idx" ON "_home_page_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_latest_idx" ON "_home_page_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_home_page_v_autosave_idx" ON "_home_page_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_home_page_v_version_seo_version_seo_image_idx" ON "_home_page_v_locales" USING btree ("version_seo_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_rels_order_idx" ON "_home_page_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_home_page_v_rels_parent_idx" ON "_home_page_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_home_page_v_rels_path_idx" ON "_home_page_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_home_page_v_rels_projects_id_idx" ON "_home_page_v_rels" USING btree ("projects_id","locale");
  CREATE INDEX IF NOT EXISTS "_home_page_v_rels_locale_idx" ON "_home_page_v_rels" USING btree ("locale");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_builder_fk" FOREIGN KEY ("form_builder_id") REFERENCES "public"."form_builder"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submission_fk" FOREIGN KEY ("form_submission_id") REFERENCES "public"."form_submission"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_hubspot_fk" FOREIGN KEY ("form_hubspot_id") REFERENCES "public"."form_hubspot"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_builder_id_idx" ON "payload_locked_documents_rels" USING btree ("form_builder_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submission_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submission_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_hubspot_id_idx" ON "payload_locked_documents_rels" USING btree ("form_hubspot_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "pages_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_builder_blocks_form_input_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_builder_blocks_form_grid_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_builder" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_builder_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_submission" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_hubspot" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "form_hubspot_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_image_text_square" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_product_selection_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_product_selection" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_projects_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_image_text_square" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_product_selection_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_product_selection" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_projects_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_home_page_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hubspot_form" CASCADE;
  DROP TABLE "_pages_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "form_builder_blocks_form_input_block" CASCADE;
  DROP TABLE "form_builder_blocks_form_grid_block" CASCADE;
  DROP TABLE "form_builder" CASCADE;
  DROP TABLE "form_builder_locales" CASCADE;
  DROP TABLE "form_submission" CASCADE;
  DROP TABLE "form_hubspot" CASCADE;
  DROP TABLE "form_hubspot_locales" CASCADE;
  DROP TABLE "home_page_blocks_hero" CASCADE;
  DROP TABLE "home_page_blocks_image_text_square" CASCADE;
  DROP TABLE "home_page_blocks_product_selection_products" CASCADE;
  DROP TABLE "home_page_blocks_product_selection" CASCADE;
  DROP TABLE "home_page_blocks_projects_block" CASCADE;
  DROP TABLE "home_page_blocks_hubspot_form" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_locales" CASCADE;
  DROP TABLE "home_page_rels" CASCADE;
  DROP TABLE "_home_page_v_blocks_hero" CASCADE;
  DROP TABLE "_home_page_v_blocks_image_text_square" CASCADE;
  DROP TABLE "_home_page_v_blocks_product_selection_products" CASCADE;
  DROP TABLE "_home_page_v_blocks_product_selection" CASCADE;
  DROP TABLE "_home_page_v_blocks_projects_block" CASCADE;
  DROP TABLE "_home_page_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "_home_page_v" CASCADE;
  DROP TABLE "_home_page_v_locales" CASCADE;
  DROP TABLE "_home_page_v_rels" CASCADE;
  DROP TABLE "settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_form_builder_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_form_submission_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_form_hubspot_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_form_builder_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_form_submission_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_form_hubspot_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "form_builder_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "form_submission_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "form_hubspot_id";
  DROP TYPE "public"."enum_form_builder_blocks_form_input_block_type";
  DROP TYPE "public"."enum_home_page_status";
  DROP TYPE "public"."enum__home_page_v_version_status";
  DROP TYPE "public"."enum__home_page_v_published_locale";`)
}
