/**
 * This file is part of YourDLT Wallet API Bridge shared under LGPL-3.0
 * Copyright (C) 2021 Using Blockchain Ltd, Reg No.: 12658136, United Kingdom
 *
 * @package     YourDLT Wallet API Bridge
 * @author      Grégory Saive for Using Blockchain Ltd <greg@ubc.digital>
 * @license     LGPL-3.0
 */
import Vue, { ComponentOptions, AsyncComponent } from "vue";

export namespace PluginBridge {
  /**
   * @type {ScalarValueType}
   * @description This type is used internally to describe scalar
   * values and arrays of scalar values.
   */
  export type ScalarValueType =
    | string
    | boolean
    | number
    | string[]
    | boolean[]
    | number[]
    | undefined;

  /**
   * @type {Dictionary}
   * @description This type describes a generic dictionary of
   * objects of generic type T.
   */
  export type Dictionary<T> = { [key: string]: T };

  /**
   * @type {Component}
   * @description This type describes a Vue component.
   */
  export type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

  /**
   * @type {ComponentsDictionary}
   * @description This type describes a dictionary that contains
   * Vue components.
   */
  export type ComponentsDictionary = Dictionary<Component>;

  /**
   * @enum {PluginInstallStatus}
   * @description This type describes the installation status of
   * a plugin. Source code of the plugins is only interpreted at
   * enablement of plugins.
   */
  export enum PluginInstallStatus {
    Installed = "installed",
    Enabled = "enabled",
    Disabled = "disabled",
    Uninstalled = "uninstalled",
  }

  /**
   * @type {PackageAuthor}
   * @description This type is used internally to describe plugin
   * authors as formatted inside `package.json` files.
   */
  export type PackageAuthor = {
    name: string;
    email?: string;
    url?: string;
  };

  /**
   * @type {PackageRepository}
   * @description This type is used internally to describe plugin
   * source code repositories as formatted inside `package.json`
   * files.
   */
  export type PackageRepository = {
    type: string;
    url: string;
  };

  /**
   * @type {PackageDependencies}
   * @description This type is used internally to describe plugin
   * dependencies as formatted inside `package.json` files.
   */
  export type PackageDependencies = {
    [npmModule: string]: string;
  };

  /**
   * @type {PluginSetting}
   * @description This type describes custom plugin settings that
   * are added when a plugin is enabled.
   */
  export type PluginSetting = {
    [name: string]: ScalarValueType;
  };

  /**
   * @enum {PluginPermissionType}
   * @description This type describes the type of permission that
   * is requested with a {PluginPermissions} entry. Permissions can
   * be related to Vuex store getter, actions and mutations but also
   * to in-app settings or plugin settings.
   */
  export enum PluginPermissionType {
    Getter = "getter",
    Action = "action",
    Mutation = "mutation",
    Setting = "setting",
  }

  /**
   * @type {PluginPermission}
   * @description This type describe a plugin permission request with
   * a `name` and `type` which is related to a `target` field and has
   * a `description` for developers to provide more information about
   * the intended *use* of the target object/entity/routine.
   */
  export type PluginPermission = {
    name: string;
    type: PluginPermissionType;
    target: string;
    description: string;
  };

  /**
   * @type {PluginStorage}
   * @description This type describe a plugin storage (database table).
   * Plugins can define custom database tables by extending the class
   * {VersionedObjectStorage}.
   */
  export type PluginStorage = {
    storageKey: string;
    model: any;
    description: string;
  };
}
