import Junit from './websites/junit/Junit';
import React from './websites/react/React';
import Angular from './websites/angular/Angular';
import Codecept from './websites/codecept/Codecept';
import Github from './websites/github/Github';
import Nest from './websites/nest/Nest';
import Ember from './websites/ember/Ember';
import Electron from './websites/electron/Electron';
import Jenkins from './websites/jenkins/Jenkins';
import Svelte from './websites/svelte/Svelte';
import Options from './Options';
import SvelteMaterialUi from './websites/sveltematerialui/SvelteMaterialUi';
import Syncthing from './websites/syncthing/Syncthing';

(() => {
  'use strict';

  Options.registerAll();
  Options.loadInGreasyfork();

  React.replace();
  Angular.replace();
  Junit.replace();
  Codecept.replace();
  Github.replace();
  Nest.replace();
  Ember.replace();
  Electron.replace();
  Jenkins.replace();
  Svelte.replace();
  SvelteMaterialUi.replace();
  Syncthing.replace();
})();
