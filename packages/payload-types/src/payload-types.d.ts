/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlocks".
 */
export type ColumnBlocks =
  | {
      block?: (ColumnMultipleTextBlock | ColumnTextCtaBlock)[] | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    'form-builder': FormBuilder;
    'form-submission': FormSubmission;
    'form-hubspot': FormHubspot;
    users: User;
    addresses: Address;
    images: Image;
    icons: Icon;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    'form-builder': {
      submissions: 'form-submission';
    };
  };
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    'form-builder': FormBuilderSelect<false> | FormBuilderSelect<true>;
    'form-submission': FormSubmissionSelect<false> | FormSubmissionSelect<true>;
    'form-hubspot': FormHubspotSelect<false> | FormHubspotSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    addresses: AddressesSelect<false> | AddressesSelect<true>;
    images: ImagesSelect<false> | ImagesSelect<true>;
    icons: IconsSelect<false> | IconsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'home-page': HomePage;
    settings: Setting;
  };
  globalsSelect: {
    'home-page': HomePageSelect<false> | HomePageSelect<true>;
    settings: SettingsSelect<false> | SettingsSelect<true>;
  };
  locale: 'en' | 'nl' | 'fr';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  blocks?: (HeroBlock | CarouselBlock | ColumnBlock | HubspotFormBlock | ImageTextBlock | TextBlock)[] | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Image;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  title: string;
  text: string;
  ctas?:
    | {
        cta: {
          label: string;
          link: string;
        };
        id?: string | null;
      }[]
    | null;
  backgroundImage: string | Image;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    background?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock".
 */
export interface CarouselBlock {
  images: (string | Image)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'carousel';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlock".
 */
export interface ColumnBlock {
  columns?: ColumnBlocks;
  id?: string | null;
  blockName?: string | null;
  blockType: 'column';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnMultipleTextBlock".
 */
export interface ColumnMultipleTextBlock {
  texts: {
    subtitle: string;
    text: string;
    id?: string | null;
  }[];
  ctas?:
    | {
        cta: {
          label: string;
          link: string;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'columnMultipleText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnTextCtaBlock".
 */
export interface ColumnTextCtaBlock {
  title: string;
  text: string;
  ctas?:
    | {
        cta: {
          label: string;
          link: string;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'columnTextCta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HubspotFormBlock".
 */
export interface HubspotFormBlock {
  hubspotForm: string | FormHubspot;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hubspot-form';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-hubspot".
 */
export interface FormHubspot {
  id: string;
  title: string;
  formId: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageTextBlock".
 */
export interface ImageTextBlock {
  title: string;
  text: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'image-text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextBlock".
 */
export interface TextBlock {
  title: string;
  text: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-builder".
 */
export interface FormBuilder {
  id: string;
  title: string;
  builder?: (FormInputBlock | FormGridBlock)[] | null;
  submissions?: {
    docs?: (string | FormSubmission)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormInputBlock".
 */
export interface FormInputBlock {
  label: string;
  isRequired: boolean;
  type?: ('text' | 'email' | 'password' | 'number' | 'date' | 'tel') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'form-input-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormGridBlock".
 */
export interface FormGridBlock {
  colums: number;
  blocks?: FormInputBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'form-grid-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submission".
 */
export interface FormSubmission {
  id: string;
  form: string | FormBuilder;
  submission?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  title?: string | null;
  role: 'user' | 'admin' | 'editor' | 'developer';
  addresses?: (string | Address)[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses".
 */
export interface Address {
  id: string;
  label: string;
  street: string;
  number: string;
  box?: string | null;
  postal_code: string;
  city: string;
  region?: string | null;
  country: string;
  email?: string | null;
  phone?: string | null;
  type?: ('billing' | 'shipping')[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: string;
  alt?: string | null;
  content?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'form-builder';
        value: string | FormBuilder;
      } | null)
    | ({
        relationTo: 'form-submission';
        value: string | FormSubmission;
      } | null)
    | ({
        relationTo: 'form-hubspot';
        value: string | FormHubspot;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'addresses';
        value: string | Address;
      } | null)
    | ({
        relationTo: 'images';
        value: string | Image;
      } | null)
    | ({
        relationTo: 'icons';
        value: string | Icon;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  blocks?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>;
        carousel?: T | CarouselBlockSelect<T>;
        column?: T | ColumnBlockSelect<T>;
        'hubspot-form'?: T | HubspotFormBlockSelect<T>;
        'image-text'?: T | ImageTextBlockSelect<T>;
        text?: T | TextBlockSelect<T>;
      };
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              link?: T;
            };
        id?: T;
      };
  backgroundImage?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock_select".
 */
export interface CarouselBlockSelect<T extends boolean = true> {
  images?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlock_select".
 */
export interface ColumnBlockSelect<T extends boolean = true> {
  columns?: T | ColumnBlocksSelect<T>;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlocks_select".
 */
export interface ColumnBlocksSelect<T extends boolean = true> {
  block?:
    | T
    | {
        columnMultipleText?: T | ColumnMultipleTextBlockSelect<T>;
        columnTextCta?: T | ColumnTextCtaBlockSelect<T>;
      };
  id?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnMultipleTextBlock_select".
 */
export interface ColumnMultipleTextBlockSelect<T extends boolean = true> {
  texts?:
    | T
    | {
        subtitle?: T;
        text?: T;
        id?: T;
      };
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              link?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnTextCtaBlock_select".
 */
export interface ColumnTextCtaBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              link?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HubspotFormBlock_select".
 */
export interface HubspotFormBlockSelect<T extends boolean = true> {
  hubspotForm?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageTextBlock_select".
 */
export interface ImageTextBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextBlock_select".
 */
export interface TextBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-builder_select".
 */
export interface FormBuilderSelect<T extends boolean = true> {
  title?: T;
  builder?:
    | T
    | {
        'form-input-block'?: T | FormInputBlockSelect<T>;
        'form-grid-block'?: T | FormGridBlockSelect<T>;
      };
  submissions?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormInputBlock_select".
 */
export interface FormInputBlockSelect<T extends boolean = true> {
  label?: T;
  isRequired?: T;
  type?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormGridBlock_select".
 */
export interface FormGridBlockSelect<T extends boolean = true> {
  colums?: T;
  blocks?:
    | T
    | {
        'form-input-block'?: T | FormInputBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submission_select".
 */
export interface FormSubmissionSelect<T extends boolean = true> {
  form?: T;
  submission?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-hubspot_select".
 */
export interface FormHubspotSelect<T extends boolean = true> {
  title?: T;
  formId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  title?: T;
  role?: T;
  addresses?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses_select".
 */
export interface AddressesSelect<T extends boolean = true> {
  label?: T;
  street?: T;
  number?: T;
  box?: T;
  postal_code?: T;
  city?: T;
  region?: T;
  country?: T;
  email?: T;
  phone?: T;
  type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images_select".
 */
export interface ImagesSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        desktop?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        background?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons_select".
 */
export interface IconsSelect<T extends boolean = true> {
  alt?: T;
  content?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home-page".
 */
export interface HomePage {
  id: string;
  blocks?: (HeroBlock | CarouselBlock | ColumnBlock | HubspotFormBlock | ImageTextBlock | TextBlock)[] | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Image;
  };
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  socials?: {
    socials?:
      | {
          social: Social;
          id?: string | null;
        }[]
      | null;
  };
  hubspot?: {
    portalId?: string | null;
    accessToken?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Social".
 */
export interface Social {
  name?: string | null;
  url?: string | null;
  icon: string | Icon;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home-page_select".
 */
export interface HomePageSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>;
        carousel?: T | CarouselBlockSelect<T>;
        column?: T | ColumnBlockSelect<T>;
        'hubspot-form'?: T | HubspotFormBlockSelect<T>;
        'image-text'?: T | ImageTextBlockSelect<T>;
        text?: T | TextBlockSelect<T>;
      };
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  socials?:
    | T
    | {
        socials?:
          | T
          | {
              social?: T | SocialSelect<T>;
              id?: T;
            };
      };
  hubspot?:
    | T
    | {
        portalId?: T;
        accessToken?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Social_select".
 */
export interface SocialSelect<T extends boolean = true> {
  name?: T;
  url?: T;
  icon?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}