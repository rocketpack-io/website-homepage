<template>
    <div class="section" id="documents">
      <div class="container">
        <div class="section-heading"><h2>basic usage code samples</h2></div>
        <div class="row justify-content-md-center">
          <div class="col-md-12 mb-5">
            <ul class="nav nav-pills nav-justified mb-3" id="v-pills-tab" role="tablist">
                <li class="nav-item"><a class="nav-link font-weight-bold" data-toggle="pill" role="tab" v-bind:class="{ 'active': isActiveTab('js') }" @click="setActiveTab('js')"><img class="icon-image" src="/img/javascript.png" /><br />javascript</a></li>
                <li class="nav-item"><a class="nav-link font-weight-bold" data-toggle="pill" role="tab" v-bind:class="{ 'active': isActiveTab('an') }" @click="setActiveTab('an')"><img class="icon-image" src="/img/android.png" /><br />android</a></li>
                <li class="nav-item"><a class="nav-link font-weight-bold" data-toggle="pill" role="tab" v-bind:class="{ 'active': isActiveTab('sw') }" @click="setActiveTab('sw')"><img class="icon-image" src="/img/swift.png" /><br />swift</a></li>
                <li class="nav-item"><a class="nav-link font-weight-bold" data-toggle="pill" role="tab" v-bind:class="{ 'active': isActiveTab('py') }" @click="setActiveTab('py')"><img class="icon-image" src="/img/python.png" /><br />python</a></li>
                <li class="nav-item"><a class="nav-link font-weight-bold" data-toggle="pill" role="tab" v-bind:class="{ 'active': isActiveTab('cs') }" @click="setActiveTab('cs')"><img class="icon-image" src="/img/csharp.png" /><br />c-sharp</a></li>
            </ul>
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade" role="tabpanel" v-bind:class="{ 'show active': isActiveTab('js') }" v-if="isActiveTab('js')">
                  <h4>installation</h4>
                  <div class="code ltr mb-3">
                      <code class="prettyprint linenums">$ npm install rocketpack.io --save</code>
                  </div>
                  <h3 class="mt-4">initialization</h3>
                  <div class="code ltr mb-3">
                      <code class="prettyprint linenums">
                          import rocketpack from 'rocketpack.io'<br />
                          rocketpack.init({ key: 'YOUR-PROJECT-KEY' })
                      </code>
                  </div>
                  <h3 class="mt-4">using data service</h3>
                  <div class="code ltr mb-3">
                      <code class="prettyprint linenums">
                          const peopleCollection = rocketpack.dataService().collection('people')<br />
                          let peopleItems = peopleCollection.find()
                      </code>
                  </div>
                  <h3 class="mt-4">using authentication service</h3>
                  <div class="code ltr mb-3">
                      <code class="prettyprint linenums">
                          const auth = rocketpack.authService()<br /><br />
                          // register a user<br />
                          function registerUser(username, password, metadata) {<br />
                          &nbsp;&nbsp;auth.register({<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;username: username,<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;password: password,<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;claims: Object.keys(obj).map((key) => ({name: key, value: obj[key]})<br />
                          &nbsp;&nbsp;})<br />
                          }
                      </code>
                  </div>
                  <div>
                    <a class="btn btn-default" href="https://github.com/rocketpack-io/rocketpack-javascript" target="_blank"><i class="fab fa-github"></i> &nbsp; github project</a>
                    <a class="btn btn-info" href="https://docs.rocketpack.io/#javascript" target="_blank"><i class="fab fa-github"></i> &nbsp; full documentation</a>
                  </div>
                </div>
                <div class="tab-pane fade" role="tabpanel" v-bind:class="{ 'show active': isActiveTab('an') }" v-if="isActiveTab('an')">
                    <div class="alert alert-warning text-center" role="alert">It will be available very soon</div>
                </div>
                <div class="tab-pane fade" role="tabpanel" v-bind:class="{ 'show active': isActiveTab('sw') }" v-if="isActiveTab('sw')">
                    <div class="alert alert-warning text-center" role="alert">It will be available very soon</div>
                </div>
                <div class="tab-pane fade" role="tabpanel" v-bind:class="{ 'show active': isActiveTab('py') }" v-if="isActiveTab('py')">
                    <div class="alert alert-warning text-center" role="alert">It will be available very soon</div>
                </div>
                <div class="tab-pane fade" role="tabpanel" v-bind:class="{ 'show active': isActiveTab('cs') }" v-if="isActiveTab('cs')">
                    <div class="alert alert-warning text-center" role="alert">It will be available very soon</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        activeTab: 'js'
    }),
    mounted() {
        PR.prettyPrint();
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
            window.setTimeout(function() {
                PR.prettyPrint();
            }, 200);
        },
        isActiveTab(tab) {
            return this.activeTab == tab;
        }
    }
}
</script>
